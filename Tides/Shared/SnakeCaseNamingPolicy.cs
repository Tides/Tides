﻿using System.Text.Json;

namespace Tides.Shared;
public class SnakeCaseNamingPolicy : JsonNamingPolicy
{
    public static SnakeCaseNamingPolicy Instance { get; } = new SnakeCaseNamingPolicy();

    public override string ConvertName(string name) => name.ToSnakeCase();
}
