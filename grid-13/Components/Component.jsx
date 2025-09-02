const cn = (...classes) => classes.join(" ");

const Component = () => {
    return (
        <div className={cn(
            "w-full rounded-xl min-h-100 bg-neutral-100",
            "bg-[radial-gradient(#e2e8f0_1px,transparent_1px)]",
            "[background-size:10px_10px]",
            "p-8 flex flex-col gap-2 items-center justify-center group"
        )}>
            <h1 className={cn("text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-300", "text-black")}>hover effect </h1>
            <p className={cn("max-w-sm mx-auto text-sm text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400")}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat reprehenderit maxime quod
            </p>
            <div className={cn(
                "size-60 rounded-lg bg-neutral-100 border border-neutral-200 transition-all duration-300 group-hover:border-neutral-300",
                "bg-[radial-gradient(#e2e8f0_1px,transparent_1px)]",
                "[background-size:10px_10px]",
                // "shadow-[4px_4px_0px_0px_#121212]"
                "shadow-2xl relative perspective-distant"
            )}>
                <img
                    src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww"
                    alt="img"
                    className={cn(
                        "w-full h-full object-cover object-bottom-left rounded-2xl",
                        "transition-transform duration-300 [transition-timing-function:cubic-bezier(.4,0,.2,1)]",
                        "transform rotate-x-30 rotate-z-30 -rotate-y-30 translate-z-20",
                        "group-hover:rotate-x-0 group-hover:rotate-z-0 group-hover:rotate-y-0 group-hover:scale-85"
                    )} />
            </div>
        </div>
    );
};

export default Component;
