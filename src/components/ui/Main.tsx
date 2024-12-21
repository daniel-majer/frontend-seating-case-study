import { Seat } from "../Seat"
import { Button } from "./button"

export const Main = () => {
  return (
    <main className='grow flex flex-col justify-center'>
      {/* inner content */}
      <div className='max-w-screen-xl m-auto p-4 flex items-start grow gap-3 w-full'>
        {/* seating card */}
        <div
          className='bg-white rounded-md grow grid p-3 self-stretch shadow-sm'
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(40px, 1fr))',
            gridAutoRows: '40px',
          }}
        >
          {/*	seating map */}
          {Array.from({ length: 100 }, (_, i) => (
            <Seat key={i} />
          ))}
        </div>

        {/* event info */}
        <aside className='w-full max-w-sm bg-white rounded-md shadow-sm p-3 flex flex-col gap-2'>
          {/* event header image placeholder */}
          <div className='bg-zinc-100 rounded-md h-32' />
          {/* event name */}
          <h1 className='text-xl text-zinc-900 font-semibold'>[event-name]</h1>
          {/* event description */}
          <p className='text-sm text-zinc-500'>
            [event-description]: Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Aliquam aliquid asperiores beatae deserunt dicta
            dolorem eius eos fuga laborum nisi officia pariatur quidem
            repellendus, reprehenderit sapiente, sed tenetur vel voluptatibus?
          </p>
          {/* add to calendar button */}
          <Button variant='secondary' disabled>
            Add to calendar
          </Button>
        </aside>
      </div>
    </main>
  )
}