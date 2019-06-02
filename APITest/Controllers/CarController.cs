using System;
using System.Collections.Generic;
using System.Linq;
using APITest.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APITest.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    //[Authorize ("read:messages")]
    public class CarController : ControllerBase {
        private readonly CarContext _context;
        public CarController (CarContext context) => _context = context;

        //GET:  api/car

        //GET: api/car/x
        [HttpGet ("{id}")]
        public ActionResult<Car> GetCar (int id) {
            var commandItem = _context.Cars.Find (id);
            if (commandItem != null) return commandItem;
            else return NotFound ();
        }

        //GET: Pagination
        [HttpGet]
        public List<Car> GetMerken (string merk, int? page, int length = 2) {
            IQueryable<Car> query = _context.Cars;

            if (!string.IsNullOrWhiteSpace (merk)) {
                query = query.Where (car => car.Merk == merk);
            }
            if (page.HasValue)
                query = query.Skip (page.Value * length);

            query = query.Take (length);

            return query.ToList ();
        }

        //POST: api/car
        [HttpPost]
        public ActionResult<Car> PostCar (Car command) {
            _context.Cars.Add (command);
            //Belangrijk om data effectief te wijzigen
            _context.SaveChanges ();
            return CreatedAtAction ("GetCar", new Car { Id = command.Id }, command);
        }

        //PUT: api/car/x
        [HttpPut ("{id}")]
        public ActionResult<Car> PutCar (int id, Car command) {

            if (id != command.Id) {
                return BadRequest ();
            }
            _context.Entry (command).State = EntityState.Modified;
            _context.SaveChanges ();
            return NoContent ();
        }
        //DELETE: api/commands/x
        [HttpDelete ("{id}")]
        public ActionResult<Car> DeleteCar (int id) {
            var commandItem = _context.Cars.Find (id);
            if (commandItem != null) {
                _context.Cars.Remove (commandItem);
                _context.SaveChanges ();
                return commandItem;
            } else return NotFound ();

        }

    }
}