using Microsoft.AspNetCore.Http;

namespace Tides.Shared;
public static class Extensions
{
    public static string ToSnakeCase(this string str) =>
            string.Concat(str.Select((x, i) => i > 0 && char.IsUpper(x) ? "_" + x.ToString() : x.ToString())).ToLower();

    public static bool EqualsIgnoreCase(this string value, string b) => value.Equals(b, StringComparison.OrdinalIgnoreCase);

    public static bool EqualsIgnoreCase(this PathString value, string b) => value.Equals(b, StringComparison.OrdinalIgnoreCase);
}
