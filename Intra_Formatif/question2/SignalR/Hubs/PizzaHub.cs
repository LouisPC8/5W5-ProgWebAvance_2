using Microsoft.AspNetCore.SignalR;
using SignalR.Services;

namespace SignalR.Hubs
{
    public class PizzaHub : Hub
    {
        private readonly PizzaManager _pizzaManager;

        public PizzaHub(PizzaManager pizzaManager) {
            _pizzaManager = pizzaManager;
        }

        public override async Task OnConnectedAsync()
        {
            _pizzaManager.AddUser();
            await Clients.All.SendAsync("NouvelleConnexion",_pizzaManager.NbConnectedUsers);
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            await base.OnConnectedAsync();
        }

        public async Task SelectChoice(PizzaChoice choice)
        {

            List<int> data = [
                _pizzaManager.GetPizzaPrice(choice),
                _pizzaManager.GetMoney(choice),
                _pizzaManager.GetNbPizzas(choice)
                ];
            await Clients.Caller.SendAsync("TaPizz", data);
        }

        public async Task UnselectChoice(PizzaChoice choice)
        {
        }

        public async Task AddMoney(PizzaChoice choice)
        {
        }

        public async Task BuyPizza(PizzaChoice choice)
        {
        }
    }
}
