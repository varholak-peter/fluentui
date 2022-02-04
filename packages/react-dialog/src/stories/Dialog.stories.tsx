import * as React from 'react';

import { Button } from '@fluentui/react-button';

import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  useDialogInstance,
} from '../index';

import descriptionMd from './DialogDescription.md';
import bestPracticesMd from './DialogBestPractices.md';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: [descriptionMd, bestPracticesMd].join('\n'),
      },
    },
  },
};

export const Default = () => {
  const dialogToolkit = useDialogInstance();

  return (
    <>
      <Button
        appearance="primary"
        onClick={() => {
          dialogToolkit.open();
        }}
      >
        Open Dialog
      </Button>
      {/* Some other components if desired. */}
      <Dialog {...dialogToolkit}>
        <DialogOverlay
          onClick={() => {
            console.log('Closing dialog by clicking overlay.');
            dialogToolkit.close();
          }}
        />
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
                console.log("I thought not. It's not a story the Jedi would tell you.");
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

export const NonModal = () => {
  const dialogToolkit = useDialogInstance();

  return (
    <>
      <Button
        appearance="primary"
        onClick={() => {
          dialogToolkit.open();
        }}
      >
        Open Dialog
      </Button>
      {/* Some other components if desired. */}
      <Dialog {...dialogToolkit}>
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
                console.log("I thought not. It's not a story the Jedi would tell you.");
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

export const FocusTrap = () => {
  const dialogToolkit = useDialogInstance();

  return (
    <>
      <Button
        appearance="primary"
        onClick={() => {
          dialogToolkit.open();
        }}
      >
        Open Dialog
      </Button>

      <p>These elements can't be focused when the dialog is opened.</p>
      <button type="button">A button</button>
      <input type="text" placeholder="Another focusable element" />

      <Dialog {...dialogToolkit}>
        <DialogOverlay
          onClick={() => {
            console.log('Closing dialog by clicking overlay.');
            dialogToolkit.close();
          }}
        />
        <DialogContent>
          <DialogHeader>Dialog title</DialogHeader>
          <DialogBody>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="John" />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Doe" />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              appearance="primary"
              onClick={() => {
                console.log('Doing some form processing magic.');
                dialogToolkit.close();
              }}
            >
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const CustomFocus = () => {
  const dialogToolkit = useDialogInstance({
    onClose: () => {
      searchFieldRef.current?.focus();
    },
    onOpen: () => {
      lastNameRef.current?.focus();
    },
    shouldAutoFocus: false,
  });
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const searchFieldRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Button
        appearance="primary"
        onClick={() => {
          dialogToolkit.open();
        }}
      >
        Open Dialog
      </Button>

      <p>The search input will receive the focus after closing the dialog.</p>
      <input type="text" placeholder="Search…" ref={searchFieldRef} />

      <Dialog {...dialogToolkit}>
        <DialogOverlay
          onClick={() => {
            console.log('Closing dialog by clicking overlay.');
            dialogToolkit.close();
          }}
        />
        <DialogContent>
          <DialogHeader>Dialog title</DialogHeader>
          <DialogBody>
            <div>
              <p>The last name input will receive the focus after opening the dialog.</p>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="John" />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Doe" ref={lastNameRef} />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              appearance="primary"
              onClick={() => {
                console.log('Doing some form processing magic.');
                dialogToolkit.close();
              }}
            >
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const NoEscapeDismiss = () => {
  const dialogToolkit = useDialogInstance();

  return (
    <>
      <Button
        appearance="primary"
        onClick={() => {
          dialogToolkit.open();
        }}
      >
        Open Dialog
      </Button>
      {/* Some other components if desired. */}
      <Dialog {...dialogToolkit}>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>Dialog title</DialogHeader>
          <DialogBody>
            You cannot close me with <kbd>Esc</kbd>. ¯\_(ツ)_/¯
          </DialogBody>
          <DialogFooter>
            <Button
              appearance="outline"
              onClick={() => {
                dialogToolkit.close();
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const NoPointerDownOverlayDismiss = () => {
  const dialogToolkit = useDialogInstance();

  return (
    <>
      <Button
        appearance="primary"
        onClick={() => {
          dialogToolkit.open();
        }}
      >
        Open Dialog
      </Button>
      {/* Some other components if desired. */}
      <Dialog {...dialogToolkit}>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>Dialog title</DialogHeader>
          <DialogBody>You cannot close me by clicking outside the Dialog. ¯\_(ツ)_/¯</DialogBody>
          <DialogFooter>
            <Button
              appearance="outline"
              onClick={() => {
                dialogToolkit.close();
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
