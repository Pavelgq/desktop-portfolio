import Terminal from 'react-console-emulator'
import styles from './CustomTerminal.module.css'

interface CommandProps {
      description: string;
      usage?: string;
      fn:  Function;

}
  
const commands: CommandProps =  {
    description: ' ',
    usage: '',
    fn: function () {
      return ``
    }
}

export function CustomTerminal() {
    return (
      <Terminal
        className={styles.terminal}
        promptLabel={'pavel@portfolio:~$'}
      />
    )
}