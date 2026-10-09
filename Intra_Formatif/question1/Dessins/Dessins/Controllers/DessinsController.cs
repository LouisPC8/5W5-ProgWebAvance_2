using Dessins.Events;
using Microsoft.AspNetCore.Mvc;

namespace Dessins.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class DessinsController : ControllerBase
    {
        [HttpGet]
        // Rien à modifier ici, juste un exemple de dessin très simple
        public ActionResult GetDrawing1()
        {
            var drawSquare = new DrawSquare(2, 2);
            
            return Ok(drawSquare);
        }

        [HttpGet]
        public ActionResult GetDrawings()
        {
            var drawStar = new DrawStar(1, 3, 20);
            var waitForStar = new Wait(1) { Events = [drawStar] };
            var drawSecondSquare = new DrawSquare(2, 2) { Events = [waitForStar] };
            var drawFirstSquare = new DrawSquare(0, 2) { Events = [drawSecondSquare] };
            var waitForSquares = new Wait(3) { Events = [drawFirstSquare] };
            var Recette = new DrawCircle(1, 1) { Events = [waitForSquares] };

            return Ok(Recette);
        }


        // TODO: Il faut ajouter une nouvelle action pour dessiner la séquence mentionnée dans l'énoncé
    }
}
