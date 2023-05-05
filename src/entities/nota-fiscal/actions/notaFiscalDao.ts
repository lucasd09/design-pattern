import { NotaFiscal } from "./../NotaFiscal";
import { IAcaoAposGerarNota } from "./actionInterface";

export class NotaFiscalDAO implements IAcaoAposGerarNota {
  Executar(notaFiscal: NotaFiscal): void {
    console.log("Gravando Dados no BD");
  }
}
