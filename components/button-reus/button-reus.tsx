import * as React from 'react';

export type ButtonReusProps = {
    type: String;
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ButtonReusProps & React.RefAttributes<HTMLElement>> {
  __ANT_BUTTON: boolean;
}

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonReusProps> = (props, ref) => {
    return (
        <button>{props.children}</button>
    )
    // return ;
};

const Button = React.forwardRef<unknown, ButtonReusProps>(InternalButton) as CompoundedComponent;

export default Button;