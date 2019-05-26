class Nodo {
    
    constructor(linha, coluna) {
        this.linha = linha;
        this.coluna = coluna;
        
        this.anterior = -1;
        this.visitado = false;
        
        this.possibilidades = [];
        this.possibilidadesVisitadas = [];
    }
    
}