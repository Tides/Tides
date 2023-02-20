namespace Tides.Shared.Entities;
public readonly struct Song
{
    public required string Name { get; init; }

    public required string Description { get; init; }

    public required DateTimeOffset DateCreated { get; init; }

    public required string Genre { get; init; }
}
