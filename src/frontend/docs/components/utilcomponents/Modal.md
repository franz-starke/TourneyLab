# Modal

A generic modal dialog component for displaying content in an overlay.

## Usage

```vue
<Modal v-if="showModal" @close="showModal = false">
  <p>Modal content goes here.</p>
</Modal>
```

## Props

| Name    | Type    | Description                       |
|---------|---------|-----------------------------------|
| (slot)  | Content | Content to display in the modal.  |

## Events

| Event | Description                |
|-------|----------------------------|
| close | Emitted when modal closes. |

## Behavior

- Displays its slot content in a centered overlay.
- Can be closed by user action (e.g., clicking outside or a close button).
