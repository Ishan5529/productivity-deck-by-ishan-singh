import React from "react";

import { Typography } from "neetoui";

const List = () => (
  <div className="flex h-full flex-col items-center justify-center p-2">
    <div className="mt-10 flex w-full items-start justify-between border-b-2 px-10 py-4">
      <div className="flex max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Typography style="h2" weight="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography className="text-gray-600" style="h4" weight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            tempore repudiandae voluptates minima cupiditate quo illo earum
            porro optio quas alias error vero inventore consectetur officia
            nobis dignissimos, dolore voluptatibus ex veritatis numquam,
            sapiente, aut accusamus temporibus. Temporibus, velit nisi.
          </Typography>
        </div>
        <Typography className="text-gray-500" style="body2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          doloremque ab officiis! Aperiam, explicabo beatae.
        </Typography>
      </div>
      <div className="h-36 w-64 rounded-lg border-2" />
    </div>
    <div className="mt-10 flex w-full items-start justify-between border-b-2 px-10 py-4">
      <div className="flex max-w-2xl flex-col gap-6">
        <div className="flex flex-col gap-1">
          <Typography style="h2" weight="bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography className="text-gray-600" style="h4" weight="medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            sint iusto ducimus quo autem perspiciatis error corrupti magnam
            atque expedita id cumque dolores nisi, laudantium sed? Corrupti eum
            neque commodi praesentium totam corporis, dolorum accusantium
            pariatur nisi autem veritatis voluptatibus.
          </Typography>
        </div>
        <Typography className="text-gray-500" style="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat
          minima ex, qui dignissimos laborum?
        </Typography>
      </div>
      <div className="h-36 w-64 rounded-lg border-2" />
    </div>
  </div>
);

export default List;
