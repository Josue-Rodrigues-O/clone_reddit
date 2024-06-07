using Reddit.Domain.Modelos;

namespace Reddit.Domain.Interfaces
{
    public interface IRepositorioPost
    {
        public void Incluir(Post post);

        public List<Post> ObterTodos();

        public Post ObterPorId(string id);

        public void Atualizar(Post post);

        public void Remover(string id);
    }
}
