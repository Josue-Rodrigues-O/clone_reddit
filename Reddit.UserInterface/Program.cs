using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.FileProviders;
using Reddit.Domain.Interfaces;
using Reddit.Infrastructure;
using Reddit.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddScoped<IRepositorioPost, RepositorioPostFake>();
builder.Services.AddScoped<ServicoPost>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();

app.UseDefaultFiles();
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")),
    ContentTypeProvider = new FileExtensionContentTypeProvider
    {
        Mappings = { [".properties"] = "application/x-msdownload" }
    }
});

app.UseAuthorization();

app.MapControllers();

app.Run();
