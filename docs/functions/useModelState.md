[**@view-models/preact**](../README.md)

---

[@view-models/preact](../README.md) / useModelState

# Function: useModelState()

> **useModelState**\<`T`\>(`model`): `T`

Defined in: [useModelState.ts:92](https://github.com/sunesimonsen/view-models-preact/blob/main/src/useModelState.ts#L92)

A Preact hook that subscribes a component to a ViewModel's state updates.

This hook connects a Preact component to a ViewModel instance, automatically
subscribing to state changes and triggering re-renders when the state updates.

## Type Parameters

### T

`T`

The state type, which must extend the State interface

## Parameters

### model

[`ViewModel`](../interfaces/ViewModel.md)\<`T`\>

The ViewModel instance to subscribe to

## Returns

`T`

The current state from the ViewModel

## Example

```tsx
class CounterViewModel extends ViewModel<{ count: number }> {
  increment = () => this.update(({ count }) => ({ count: count + 1 }));
}

function Counter() {
  const counterModel = useMemo(() => new CounterViewModel({ count: 0 }), []);
  const { count } = useModelState(counterModel);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={counterModel.increment}>+</button>
    </div>
  );
}
```
