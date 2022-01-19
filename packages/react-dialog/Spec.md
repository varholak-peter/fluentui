# @fluentui/react-dialog Spec

## Background

A Dialog is an elevated Card triggered by a user’s action.

## Prior Art

- All mentions of v7 or v8 refer to Fabric - `@fluentui/react` ([docsite](https://developer.microsoft.com/en-us/fluentui#/))
- All mentions of v0 refer to Northstar - `@fluentui/react-northstar` ([docsite](https://fluentsite.z22.web.core.windows.net/))

- [Github epic](https://github.com/microsoft/fluentui/issues/20953)
- [Open UI Research](https://open-ui.org/components/dialog.research)
- Dialogs in 3rd party UI systems:
  - [Carbon](https://react.carbondesignsystem.com/?path=/docs/components-modal--default)
  - [Chakra UI](https://chakra-ui.com/docs/overlay/modal)
  - [FAST](https://explore.fast.design/components/fast-dialog)
  - [Material UI](https://mui.com/components/dialogs/)
  - [Radix](https://www.radix-ui.com/docs/primitives/components/dialog)
  - [Reach UI](https://reach.tech/dialog/)
  - [Reakit](https://reakit.io/docs/dialog/)
    - [Ariakit](https://github.com/reakit/reakit/tree/v2)
  - [Spectrum](https://react-spectrum.adobe.com/react-spectrum/Dialog.html)

### v8

[Documentation for v8 Dialog](https://developer.microsoft.com/en-us/fluentui#/controls/web/dialog)

### v0

[Documentation for v0 Dialog](https://fluentsite.z22.web.core.windows.net/components/dialog/definition)

## Sample Code

```tsx
export const MyDialog = () => {
  const dialogToolkit = useDialogInstance();
  return (
    <>
      <Button
        appearance="primary"
        onClick={() => {
          dialogToolkit.open();
        }}
      >
        {dialogToolkit.isOpen ? 'Close' : 'Open'} Dialog
      </Button>
      {/* Some other components if desired. */}
      <Dialog {...dialogToolkit}>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>Dialog title</DialogHeader>
          <DialogBody>Did you ever hear the tragedy of Darth Plagueis The Wise?</DialogBody>
          <DialogFooter>
            <Button
              appearance="outline"
              onClick={() => {
                dialogToolkit.close();
              }}
            >
              Cancel
            </Button>
            <Button
              appearance="primary"
              onClick={() => {
                console.log('I thought not. It’s not a story the Jedi would tell you.');
                dialogToolkit.close();
              }}
            >
              No?
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
```

## API

_List the **Props** and **Slots** proposed for the component. Ideally this would just be a link to the component's `.types.ts` file_

## Structure

- _**Public**_
- _**Internal**_

### DOM

```html
<button>Open Dialog</button>
<!-- Something something something -->
<div class="fui-portal">
  <div class="fui-dialog-overlay" />
  <div class="fui-dialog">
    <header>Dialog title</header>
    <div>Did you ever hear the tragedy of Darth Plagueis The Wise?</div>
    <footer>
      <button>Cancel</button>
      <button>No?<button>
    </footer>
  </div>
</div>
```

## Migration

_Describe what will need to be done to upgrade from the existing implementations:_

- _Migration from v8_
- _Migration from v0_

## Behaviors

_Explain how the component will behave in use, including:_

- _Component States_
- _Interaction_
  - _Keyboard_
  - _Cursor_
  - _Touch_
  - _Screen readers_

## Accessibility

Base accessibility information is included in the design document. After the spec is filled and review, outcomes from it need to be communicated to design and incorporated in the design document.

- Decide whether to use **native element** or folow **ARIA** and provide reasons
- Identify the **[ARIA](https://www.w3.org/TR/wai-aria-practices-1.2/) pattern** and, if the component is listed there, follow its specification as possible.
- Identify accessibility **variants**, the `role` ([ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions)) of the component, its `slots` and `aria-*` props.
- Describe the **keyboard navigation**: Tab Oder and Arrow Key Navigation. Describe any other keyboard **shortcuts** used
- Specify texts for **state change announcements** - [ARIA live regions
  ](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) (number of available items in dropdown, error messages, confirmations, ...)
- Identify UI parts that appear on **hover or focus** and specify keyboard and screen reader interaction with them
- List cases when **focus** needs to be **trapped** in sections of the UI (for dialogs and popups or for hierarchical navigation)
- List cases when **focus** needs to be **moved programatically** (if parts of the UI are appearing/disappearing or other cases)
