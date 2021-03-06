﻿using System;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
          public DataContext(DbContextOptions options) : base(options)
          {
          }

          public DbSet<Value> Values { get; set; }
          public DbSet<Activity> Acitivities {get;set;}

          protected override void OnModelCreating(ModelBuilder builder)
          {

            base.OnModelCreating(builder);

              builder.Entity<Value>()
                 .HasData(
                     new Value {Id = 1, Name = "Biraz1"},
                     new Value {Id = 2, Name = "Biraz2"},
                     new Value {Id = 3, Name = "Biraz3"}
                 );
          }
    }
}
