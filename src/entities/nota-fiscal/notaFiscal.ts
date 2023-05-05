import { Budget } from "../budgets";
import { ActionList } from "./actions/actionList";

export interface NotaFiscalProps {
  Budget?: Budget;
  RazaoSocial: string;
  Cnpj: string;
  DtEmissao: Date;
  ValorBruto: number;
  Impostos: number;
  OBS: string;
  actions: ActionList;
}

export class NotaFiscal {
  private props: NotaFiscalProps;

  constructor(props: NotaFiscalProps) {
    this.props = props;
  }
}
