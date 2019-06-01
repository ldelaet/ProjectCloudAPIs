using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITest.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace APITest {
    public class Startup {
        public Startup (IConfiguration configuration) => Configuration = configuration;

        public IConfiguration Configuration { get; }
        public void ConfigureServices (IServiceCollection services) {
            services.AddDbContext<CarContext> (OperatingSystem => OperatingSystem.UseSqlServer (Configuration["Data:CommandAPIConnection:ConnectionString"]));
            services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_2);
        }
        public void Configure (IApplicationBuilder app, IHostingEnvironment env, CarContext carContext) {
            app.UseCors (builder =>
                builder.AllowAnyOrigin ()
                .AllowAnyMethod ()
                .AllowAnyHeader ());
            app.UseMvc ();
            DBInitializer.Initialize (carContext);

        }
    }
}