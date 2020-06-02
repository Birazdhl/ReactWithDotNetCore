﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedValues : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Biraz1" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Biraz2" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "Biraz3" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
