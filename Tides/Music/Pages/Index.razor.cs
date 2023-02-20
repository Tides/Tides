using Tides.Shared.Entities;

namespace Tides.Music.Pages;

public partial class Index
{
    public List<Song> Songs { get; set; } = new()
    {
        new()
        {
            Name = "Grooves",
            Description = "Groovy af yeas",
            DateCreated = DateTime.UtcNow,
            Genre = "Chillhop"
        },
         new()
        {
            Name = "Who Am I",
            Description = "Yeah Idk who I am",
            DateCreated = DateTime.UtcNow,
            Genre = "Chillhop"
        },
          new()
        {
            Name = "Decompress",
            Description = "Do it",
            DateCreated = DateTime.UtcNow,
            Genre = "Chillhop"
        }
    };
}
