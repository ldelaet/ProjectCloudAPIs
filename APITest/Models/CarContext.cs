using APITest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APITest.Models {
    public class CarContext : DbContext {
        public CarContext (DbContextOptions<CarContext> options) : base (options) { }
        public DbSet<Car> Cars { get; set; }
    }
}