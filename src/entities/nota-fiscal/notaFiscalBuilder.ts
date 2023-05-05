import { Budget } from "../budgets";
import { Product } from "../products";
import { NotaFiscalProps, NotaFiscal } from "./NotaFiscal";
import { IAcaoAposGerarNota } from "./actions/actionInterface";
import { ActionList } from "./actions/actionList";

export class NotaFiscalBuilder {
  private props: NotaFiscalProps;

  constructor() {
    this.props = {
      RazaoSocial: "",
      Cnpj: "",
      DtEmissao: new Date(),
      ValorBruto: 0,
      Impostos: 0,
      OBS: "",
      actions: new ActionList(),
    };
  }

  public budget(budget: Budget): NotaFiscalBuilder {
    this.props.Budget = budget;
    return this;
  }

  public withRazaoSocial(RazaoSocial: string): NotaFiscalBuilder {
    this.props.RazaoSocial = RazaoSocial;
    return this;
  }

  public withCnpj(Cnpj: string): NotaFiscalBuilder {
    this.props.Cnpj = Cnpj;
    return this;
  }

  public withDtEmissao(DtEmissao: Date): NotaFiscalBuilder {
    this.props.DtEmissao = DtEmissao;
    return this;
  }

  public withImpostos(Impostos: number): NotaFiscalBuilder {
    this.props.Impostos = Impostos;
    return this;
  }

  public withOBS(OBS: string): NotaFiscalBuilder {
    this.props.OBS = OBS;
    return this;
  }

  public AddAction(action: IAcaoAposGerarNota): NotaFiscalBuilder {
    this.props.actions.Add(action);

    return this;
  }

  public build(): NotaFiscal {
    this.props.ValorBruto = this.props.Budget!.budgetValue;

    this.props.actions.Execute;

    return new NotaFiscal(this.props);
  }
}
