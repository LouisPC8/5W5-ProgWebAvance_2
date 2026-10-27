using Microsoft.VisualStudio.TestTools.UnitTesting;
using Microsoft.EntityFrameworkCore;
using TestsUnitairesPourServices.Data;
using TestsUnitairesPourServices.Exceptions;
using TestsUnitairesPourServices.Models;

namespace TestsUnitairesPourServices.Services.Tests
{
    [TestClass()]
    public class CatsServiceTests
    {
        private DbContextOptions<ApplicationDBContext> _options;
        
        public CatsServiceTests()
        {
            _options = new DbContextOptionsBuilder<ApplicationDBContext>()
                .UseInMemoryDatabase(databaseName: "CatsService")
                .UseLazyLoadingProxies(true)
                .Options;
        }

        [TestMethod()]
        public void MoveTest()
        {
            
        }
    }
}