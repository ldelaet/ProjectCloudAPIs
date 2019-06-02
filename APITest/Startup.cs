using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APITest.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
            // string domain = $"https://{Configuration["Auth0:Domain"]}/";
            // services.AddAuthentication (options => {
            //     options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //     options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            // }).AddJwtBearer (options => {
            //     options.Authority = domain;
            //     options.Audience = Configuration["Auth0:ApiIdentifier"];
            // });

            // services.AddAuthorization (options => {
            //     options.AddPolicy ("read:messages", policy => policy.Requirements.Add (new HasScopeRequirement ("read:messages", domain)));
            // });

            // // register the scope authorization handler
            // services.AddSingleton<IAuthorizationHandler, HasScopeHandler> ();
        }
        public void Configure (IApplicationBuilder app, IHostingEnvironment env, CarContext carContext) {

            // app.UseAuthentication ();

            app.UseCors (builder =>
                builder.AllowAnyOrigin ()
                .AllowAnyMethod ()
                .AllowAnyHeader ());
            app.UseMvc ();
            DBInitializer.Initialize (carContext);

        }
    }
}