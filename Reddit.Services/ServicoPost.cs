using Reddit.Domain.Interfaces;
using Reddit.Domain.Modelos;

namespace Reddit.Services
{
    public class ServicoPost
    {
        private readonly IRepositorioPost repositorioPost;
        public ServicoPost(IRepositorioPost implementacaoRepositorioPost)
        {
            repositorioPost = implementacaoRepositorioPost;
        }

        public List<Post> ObterTodos()
        {
            return repositorioPost.ObterTodos();
        }

    }
}
