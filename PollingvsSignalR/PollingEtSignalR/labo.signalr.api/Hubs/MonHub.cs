using labo.signalr.api.Data;
using labo.signalr.api.Models;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using SQLitePCL;

namespace labo.signalr.api.Hubs
{
    public class MonHub : Hub
    {

        private readonly ApplicationDbContext _context;

        public MonHub(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task SendTaskList()
        {
           List<UselessTask> value = await _context.UselessTasks.ToListAsync();
           await Clients.Caller.SendAsync("tasklist", value);
        }

        public override async Task OnConnectedAsync()
        {
            await SendTaskList();
        }

        public async Task AddTask(string taskName)
        {
           
            UselessTask uselessTask = new UselessTask()
            {
                Completed = false,
                Text = taskName
            };
            await _context.UselessTasks.AddAsync(uselessTask);
            await _context.SaveChangesAsync();
            await Clients.Caller.SendAsync("taskAdded", uselessTask);
            await SendTaskList();

        }

    }
}
