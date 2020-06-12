using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using static Application.Activities.Create;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime Date { get; set; }
            public string City { get; set; }
            public string Venue { get; set; }
        }
    }

    public class Handler : IRequestHandler<Command>
    {
        public DataContext _context { get; }
        public Handler(DataContext context)
        {
            _context = context;

        }
        public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = new Activity
            {
                Id = request.Id,
                Title = request.Title,
                Description = request.Description,
                Category = request.Category,
                Date = request.Date,
                City = request.City,
                Venue = request.Venue
            };

            _context.Acitivities.Add(activity);
            var success = await _context.SaveChangesAsync() > 0;
            if(success) return Unit.Value;

            throw new Exception("Problem Sacing Changes");

        }
    }
}