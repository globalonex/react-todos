import styles from './App.module.scss'
import { ITodo } from '../../types';
import { useTodos } from '../../hooks/useTodos';

export function App() {
    const {todos, next, loading} = useTodos();

    const list = todos.length ? todos.map((todo: ITodo) => {
        return <li className={styles.todo} key={todo.id}>
            {todo.title}
        </li>
    }) : 'List is empty';

    return <div className={styles.todos}>
        <div className={styles.title}>Todos</div>
        <hr />
        <ul className={styles.list}>
            { list }
        </ul>
        {loading && 'Loading...'}
        <hr />
        <button onClick={next} className={[styles.btn, styles.next].join(' ')}>Следующая</button>
    </div>
}