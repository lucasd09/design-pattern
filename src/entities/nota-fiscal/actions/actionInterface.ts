import { NotaFiscal } from "../NotaFiscal";

export interface IAcaoAposGerarNota {
  Executar(notaFiscal: NotaFiscal): void;
}
