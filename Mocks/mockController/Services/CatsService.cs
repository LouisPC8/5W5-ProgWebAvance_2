using System;
using mock.depart.Data;
using mock.depart.Models;

namespace mock.depart.Services
{
	public class CatsService : BaseService<Cat>
	{
        private static Random random = new Random();

        public CatsService()
		{
		}

		public CatsService(ApplicationDbContext context) : base(context)
		{
		}

		public int ChiffreChanceux()
		{
			return random.Next(1, 101); // Génère un nombre aléatoire entre 1 et 100
		}
	}
}

