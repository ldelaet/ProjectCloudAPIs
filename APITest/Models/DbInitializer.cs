using System.Linq;
using APITest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APITest.Models {
    public class DBInitializer {
        public static void Initialize (CarContext context) {
            context.Database.EnsureCreated ();
            if (!context.Cars.Any ()) {
                var car = new Car () {
                    Naam = "Lambo",
                    TopSnelheid = "230",
                    Merk = "Lamborghini",
                    Afbeelding = "https://robbreportedit.files.wordpress.com/2018/10/performante_spyder_beauty_01.jpg"
                };

                context.Cars.Add (car);

                context.SaveChanges ();
            }
        }
    }
}