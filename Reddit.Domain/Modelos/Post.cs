namespace Reddit.Domain.Modelos
{
    public class Post
    {
        public string Id { get; set; }
        public string Autor { get; set; }
        public string Avatar { get; set; }
        public string Titulo { get; set; }
        public string Comunidade { get; set; }
        public string Texto { get; set; }
        public string NumeroDeLikes { get; set; }
        public string NumeroDeComentarios { get; set; }
        public string TempoDecorrido { get; set; }
        public string LocalDaPublicacao { get; set; }
        public DateTime DataDePublicacao { get; set; }
        public Imagem[] Carrossel { get; set; } = [];
        public bool PossuiImagens => Carrossel.Length != 0;
    }
}
