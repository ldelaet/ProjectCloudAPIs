using System;
using System.Collections.Generic;
using APITest.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace APITest.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase {
        private readonly CarContext _context;
        public CarController (CarContext context) => _context = context;

        //GET:  api/car
        [HttpGet]
        public ActionResult<IEnumerable<Car>> GetCars () {
            return _context.Cars;
        }

        //GET: api/car/x
        [HttpGet ("{id}")]
        public ActionResult<Car> GetCar (int id) {
            var commandItem = _context.Cars.Find (id);
            if (commandItem != null) return commandItem;
            else return NotFound ();
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