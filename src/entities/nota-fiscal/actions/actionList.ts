import { NotaFiscal } from "../NotaFiscal";
import { IAcaoAposGerarNota } from "./actionInterface";

export class ActionList {
  private acoes: IAcaoAposGerarNota[] = [];

  Add(acao: IAcaoAposGerarNota): void {
    this.acoes.push(acao);
  }

  Remove(acao: IAcaoAposGerarNota): void {
    const index = this.acoes.indexOf(acao);
    if (index !== -1) {
      this.acoes.splice(index, 1);
    }
  }

  Execute(notaFiscal: NotaFiscal): void {
    this.acoes.forEach((acao) => acao.Executar(notaFiscal));
  }
}
