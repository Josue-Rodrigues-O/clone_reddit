using Microsoft.AspNetCore.Mvc;
using Reddit.Domain.Modelos;
using Reddit.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Reddit.UserInterface.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly ServicoPost _servicoPost;

        public PostsController(ServicoPost servicoPost)
        {
            _servicoPost = servicoPost;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_servicoPost.ObterTodos());
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post()
        {
        }

        [HttpPut("{id}")]
        public void Put(int id)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
