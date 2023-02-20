using Microsoft.AspNetCore.Components;

namespace Tides.Music.Components;

public partial class Card
{
    [Parameter]
    [EditorRequired]
    public string Name { get; set; }

    [Parameter]
    [EditorRequired]
    public string Genre { get; set; }

    [Parameter]
    [EditorRequired]
    public string Description { get; set; }
}
