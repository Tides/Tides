using Microsoft.Extensions.FileProviders;
using Tides.Shared;

Directory.CreateDirectory("./.well-known");

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers().AddJsonOptions(x =>
{
    x.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
    x.JsonSerializerOptions.PropertyNamingPolicy = SnakeCaseNamingPolicy.Instance;
});

var app = builder.Build();

// Configure the HTTP request pipeline.

var isDev = app.Environment.IsDevelopment();

if (isDev)
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles().UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @".well-known")),
    RequestPath = new PathString("/.well-known"),
    ServeUnknownFileTypes = true
});

app.UseRouting();

app.MapWhen(ctx => ctx.Request.Host.Port == 5002 || ctx.Request.Host.Equals("music.tides.cc"), music =>
{
    music.Use((ctx, next) =>
    {
        ctx.Request.Path = "/Music" + ctx.Request.Path;
        return next();
    });

    music.UseBlazorFrameworkFiles("/Music");
    music.UseStaticFiles().UseStaticFiles("/Music");

    music.UseRouting();

    music.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
        endpoints.MapFallbackToFile("/Music/{*path:nonfile}", "/Music/index.html");
    });
});

if (isDev)
{
    app.UseSpa(builder =>
    {
        builder.Options.SourcePath = "../Frontend";
        builder.Options.DevServerPort = 5173;

        builder.UseProxyToSpaDevelopmentServer("http://localhost:5173");
    });
}
else
{
    app.MapFallbackToFile("index.html");
}

app.Run();
