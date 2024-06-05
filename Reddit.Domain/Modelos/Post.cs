namespace Reddit.Domain.Modelos
{
    public class Post
    {
        public string Autor { get; set; }
        public string Avatar { get; set; }
        public string Titulo { get; set; }
        public string Comunidade { get; set; }
        public string Texto { get; set; }
        public string NumeroDeLikes { get; set; }
        public string NumeroDeComentarios { get; set; }
        public string TempoDecorrido { get; set; }
        public string DataDePublicacao { get; set; }
        public List<Imagem> Carrossel { get; set; }
        public bool PossuiImagens
        {
            get => Carrossel.Any();
            private set => Carrossel.Any();
        }
    }
}
