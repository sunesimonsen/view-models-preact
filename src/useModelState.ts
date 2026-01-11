import type { ViewModel, State } from "@view-models/core";
import { useEffect, useState } from "preact/hooks";

/**
 * A Preact hook that subscribes a component to a ViewModel's state updates.
 *
 * This hook connects a Preact component to a ViewModel instance, automatically
 * subscribing to state changes and triggering re-renders when the state updates.
 *
 * @template T - The state type, which must extend the State interface
 * @param model - The ViewModel instance to subscribe to
 * @returns The current state from the ViewModel
 *
 * @example
 * ```tsx
 * class CounterViewModel extends ViewModel<{ count: number }> {
 *   increment = () => this.update(({ count }) => ({ count: count + 1 }));
 * }
 *
 * function Counter() {
 *   const counterModel = useMemo(() => new CounterViewModel({ count: 0 }), []);
 *   const { count } = useModelState(counterModel);
 *
 *   return (
 *     <div>
 *       <p>Count: {count}</p>
 *       <button onClick={counterModel.increment}>+</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useModelState<T extends State>(model: ViewModel<T>): T {
  const [state, setState] = useState<T>(model.state);

  useEffect(
    () =>
      model.subscribe((newState) => {
        setState(newState);
      }),
    [model],
  );

  return state;
}
