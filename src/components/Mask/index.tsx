import React from "react";
import MaskedInput from "react-text-mask";

/**
 * ATENÇÃO!!!
 * Essas mascáras são para uso EXCLUSIVO dos inputs
 * do Material UI e não funcionarão adequadamente
 * se utilizadas de alguma outra maneira!
 * @see https://material-ui.com/pt/components/text-fields/#integration-with-3rd-party-input-libraries
 */

export interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const CelularMaskInput: React.FC<TextMaskCustomProps> = (props) => {
  const { inputRef, ...other } = props;
  return <MaskedInput
    {...other}
    ref={(ref: any) => {
      inputRef(ref ? ref.inputElement : null);
    }}
    mask={['(',/\d/,/\d/,')',' ','9',' ',/\d/,/\d/,/\d/,/\d/,' ',/\d/,/\d/,/\d/,/\d/]}
  />;
};

const CpfMaskInput: React.FC<TextMaskCustomProps> = (props) => {
  const { inputRef, ...other } = props;
  return <MaskedInput
    {...other}
    ref={(ref: any) => {
      inputRef(ref ? ref.inputElement : null);
    }}
    mask={[/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/]}
  />;
}

const DataNascimentoMaskInput: React.FC<TextMaskCustomProps> = (props) => {
  const { inputRef, ...other } = props;
  return <MaskedInput
    {...other}
    ref={(ref: any) => {
      inputRef(ref ? ref.inputElement : null);
    }}
    mask={[/\d/,/\d/,'/',/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/]}
  />;
}

const _ = {
  CelularMaskInput,
  CpfMaskInput,
  DataNascimentoMaskInput
};

export default _;
