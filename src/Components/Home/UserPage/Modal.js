import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Sheet, { SheetRef } from 'react-modal-sheet';
import './Modal.css'

function Modal() {
  const [isOpen, setOpen] = useState (false);
//   const ref = useRef<SheetRef> ();
//   const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      {/* Opens to 400 since initial index is 1 */}
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[600, 400, 100, 0]}
        initialSnap={1}
        onSnap={snapIndex =>
          console.log('> Current snap point index:', snapIndex)
        }
      >
        <Sheet.Container>
          <Sheet.Content>
              <button>helloi</button>
              hello
              hello
              hello
              hello
              hello
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae est velit eius aliquam rerum, enim dicta voluptatem beatae repellendus, eaque dolor inventore earum, deserunt nesciunt praesentium cum laborum quos? Iste vero veritatis ut quasi, non culpa provident ab aspernatur dolor, nisi maiores corporis voluptatum molestiae praesentium dicta velit. Nulla, sapiente. Id fuga repellat facere nostrum minima? Fugit ex numquam temporibus esse commodi hic ipsum perspiciatis adipisci error, rerum, placeat recusandae possimus provident maxime. Saepe et vel corrupti, rem dolor ad repellendus laborum suscipit eligendi! Doloremque neque error quidem possimus quas, aliquid ipsam corporis eum aspernatur quis ducimus quia nobis cumque minima perspiciatis cupiditate ullam consectetur sed labore impedit! Assumenda ea non error est. Vero, laboriosam perferendis possimus cumque veritatis doloremque, deserunt excepturi quia vitae voluptas at atque magni inventore, distinctio nisi similique ipsum sed ex labore nostrum neque quis suscipit ad quaerat. Consequatur laudantium eveniet in, dolorem accusantium excepturi exercitationem sed modi atque itaque! Doloremque ipsum quidem adipisci eos delectus quo doloribus, itaque nihil molestiae? Reiciendis ratione exercitationem officia non autem. Dolor explicabo sequi impedit earum, maiores quasi numquam exercitationem, architecto ea culpa, porro labore ipsa voluptatem quo? Autem eligendi perferendis culpa debitis voluptatem itaque officiis quaerat placeat unde, soluta nemo tempora ad neque ut! Commodi, sit natus quaerat beatae culpa quos accusantium dolore earum ullam doloribus rem accusamus non mollitia esse laborum reprehenderit cum? Nihil cupiditate earum, maiores aliquam culpa temporibus molestias doloremque provident eum accusamus molestiae fugiat, voluptatibus facilis tempora nemo officiis ab excepturi at ratione? Debitis, architecto quod minus tempora rerum doloribus deleniti iure nihil cupiditate accusantium quaerat. Distinctio quae amet blanditiis, nisi nostrum voluptatibus ab quod commodi facilis et repellat quas, qui possimus iure nulla voluptates fugit beatae veritatis cumque harum modi eligendi eius ullam repudiandae. Necessitatibus voluptatum blanditiis eius quod id dolore quaerat vitae? Dolor animi maiores aperiam officia dolorem ab esse, tenetur fugiat ratione enim aspernatur iusto, optio facere minima quaerat numquam cum saepe. Aspernatur, hic? Corrupti culpa fuga repellendus ratione recusandae accusantium esse vero, minima assumenda delectus atque enim doloribus eos, necessitatibus magnam sint veniam sunt provident dignissimos temporibus dolores ipsam alias deserunt maiores. Sit, nostrum. Quod, ipsa atque fugit tempore praesentium vel eos, tempora iure totam ipsum fugiat est asperiores reiciendis id! Quod dolorum labore sed officia enim, sapiente assumenda saepe provident nam harum maxime dolor quisquam cum tempora ratione aliquid nisi voluptate, velit quos fuga. In ullam, repudiandae earum quia, omnis laboriosam, ipsa saepe consequuntur nostrum nihil facere minima nulla neque. Laboriosam modi optio quidem enim. Molestiae maxime, nihil eaque suscipit commodi sunt asperiores quod quia obcaecati aspernatur autem error voluptate voluptatem adipisci? Ad ea fuga velit animi maiores deserunt ratione ut architecto commodi, quidem error voluptate voluptatem iure! Eligendi, assumenda veritatis? Eligendi libero voluptatem sunt omnis ea accusantium minima accusamus. Asperiores officiis reiciendis perferendis, ratione iste eum dolor nulla fuga dolorum accusamus deserunt dignissimos tempora tenetur alias architecto assumenda molestias voluptates dicta! Labore exercitationem voluptatibus adipisci quibusdam, assumenda libero natus consequatur accusantium eligendi iste sit, officiis, totam porro architecto.
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );


}

export default Modal;

// import React from 'react';
// import Sheet from 'react-modal-sheet';
// import { useOverlayTriggerState } from '@react-stately/overlays';
// import { useOverlay, useModal, OverlayProvider } from '@react-aria/overlays';
// import { FocusScope } from '@react-aria/focus';
// import { useButton } from '@react-aria/button';
// import { useDialog } from '@react-aria/dialog';

// const Modal = () => {
//   const sheetState = useOverlayTriggerState({});
//   const openButtonRef = React.useRef(null);
//   const openButton = useButton({ onPress: sheetState.open }, openButtonRef);

//   return (
//     <div>
//       <button {...openButton.buttonProps} ref={openButtonRef}>
//         Open sheet
//       </button>

//       <Sheet isOpen={sheetState.isOpen} onClose={sheetState.close}>
//         <OverlayProvider>
//           <FocusScope contain autoFocus restoreFocus>
//             <SheetComp sheetState={sheetState} />
//           </FocusScope>
//         </OverlayProvider>
//       </Sheet>
//     </div>
//   );
// };

// const SheetComp = ({ sheetState }) => {
//   const containerRef = React.useRef(null);
//   const dialog = useDialog({}, containerRef);
//   const overlay = useOverlay(
//     { onClose: sheetState.close, isOpen: true, isDismissable: true },
//     containerRef
//   );

//   const closeButtonRef = React.useRef(null);
//   const closeButton = useButton(
//     { onPress: sheetState.close, 'aria-label': 'Close sheet' },
//     closeButtonRef
//   );

//   useModal();

//   // In real world usage this would be a separate React component
//   const customHeader = (
//     <div>
//       <span {...dialog.titleProps}>Some title for sheet</span>
//       <button {...closeButton.buttonProps}>🅧</button>
//     </div>
//   );

//   return (
//     <>
//       <Sheet.Container
//         {...overlay.overlayProps}
//         {...dialog.dialogProps}
//         ref={containerRef}
//       >
//         <Sheet.Header>{customHeader}</Sheet.Header>
//         <Sheet.Content>{/*...*/}</Sheet.Content>
//       </Sheet.Container>
//       <Sheet.Backdrop />
//     </>
//   );
// };
// export default Modal;