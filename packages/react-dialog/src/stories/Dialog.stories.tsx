import * as React from 'react';

import { Button } from '@fluentui/react-button';

import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
  useDialog,
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

export const Default = () => (
  <Dialog>
    <DialogTrigger>
      <Button appearance="primary">Open Dialog</Button>
    </DialogTrigger>
    <DialogOverlay />
    <DialogContent>
      <DialogHeader>Dialog title</DialogHeader>
      <DialogBody>Did you ever hear the tragedy of Darth Plagueis The Wise?</DialogBody>
      <DialogFooter>
        <Button appearance="outline">Cancel</Button>
        <Button appearance="primary">No?</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const NonModal = () => (
  <Dialog>
    <DialogTrigger>
      <Button appearance="primary">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>Dialog title</DialogHeader>
      <DialogBody>Did you ever hear the tragedy of Darth Plagueis The Wise?</DialogBody>
      <DialogFooter>
        <Button appearance="primary">No?</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const Controlled = () => {
  const dialogToolkit = useDialog();
  return (
    <Dialog {...dialogToolkit}>
      <DialogTrigger>
        <Button appearance="primary">{dialogToolkit.isOpen ? 'Close' : 'Open'} Dialog</Button>
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>Dialog title</DialogHeader>
        <DialogBody>Did you ever hear the tragedy of Darth Plagueis The Wise?</DialogBody>
        <DialogFooter>
          <Button appearance="outline">Cancel</Button>
          <Button
            appearance="primary"
            onClick={() => {
              console.log('doing something before dialog closes');
              dialogToolkit.close();
              console.log('doing something before after closes');
            }}
          >
            No?
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const FocusTrap = () => (
  <>
    <Dialog>
      <DialogTrigger>
        <Button appearance="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogOverlay />
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
          <Button appearance="primary">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <p>These elements can't be focused when the dialog is opened.</p>
    <button type="button">A button</button>
    <input type="text" placeholder="Another focusable element" />
  </>
);

export const CustomFocus = () => {
  const dialogToolkit = useDialog();
  const lastNameRef = React.useRef<HTMLInputElement>(null);
  const searchFieldRef = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <Dialog
        {...dialogToolkit}
        disableAutoFocus
        onClose={() => {
          searchFieldRef.current?.focus();
        }}
      >
        <DialogTrigger>
          <Button appearance="primary">Open Dialog</Button>
        </DialogTrigger>
        <DialogOverlay />
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
            <Button appearance="primary">Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <p>The search input will receive the focus after closing the dialog.</p>
      <input type="text" placeholder="Search…" ref={searchFieldRef} />
    </>
  );
};

export const NoEscapeDismiss = () => {
  const dialogToolkit = useDialog();
  return (
    <Dialog
      {...dialogToolkit}
      onBeforeClose={({ cancelClose, source }) => {
        if (source === 'escape') {
          cancelClose();
        }
      }}
    >
      <DialogTrigger>
        <Button appearance="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>Dialog title</DialogHeader>
        <DialogBody>
          You cannot close me with <kbd>Esc</kbd>. ¯\_(ツ)_/¯
        </DialogBody>
        <DialogFooter>
          <Button appearance="primary">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const NoPointerDownOverlayDismiss = () => {
  const dialogToolkit = useDialog();
  return (
    <Dialog
      {...dialogToolkit}
      onBeforeClose={({ cancelClose, source }) => {
        if (source === 'overlay') {
          cancelClose();
        }
      }}
    >
      <DialogTrigger>
        <Button appearance="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>Dialog title</DialogHeader>
        <DialogBody>
          You cannot close me with <kbd>Esc</kbd>. ¯\_(ツ)_/¯
        </DialogBody>
        <DialogFooter>
          <Button appearance="primary">Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
