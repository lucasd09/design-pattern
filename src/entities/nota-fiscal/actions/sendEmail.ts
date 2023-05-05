import { NotaFiscal } from "./../NotaFiscal";
import { IAcaoAposGerarNota } from "./actionInterface";

export class SendEmail implements IAcaoAposGerarNota {
  Executar(notaFiscal: NotaFiscal): void {
    console.log("Enviando email");
  }
}
