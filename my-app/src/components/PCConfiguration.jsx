function PCConfiguration() {
    return(
        <div className="flex justify-center">
            <div className="relative wrapper flex flex-col h-fit">
                <img 
                    src="./pc-configuration-panel.png"
                    alt="pc config panel"
                    className="object-contain rounded-xl max-h-80"
                />
                <div className="flex flex-col absolute top-1/2 -translate-y-1/2 left-10 items-start">
                    <p className="text-3xl font-bold text-emerald-500 mb-3">Stwórz komputer idealny dla swoich<br/>potrzeb</p>
                    <p className="text-2xl text-emerald-500 font-medium mb-3">Pomożemy Ci dobrać podzespoły</p>
                    <button
                        className="
                            bg-green-500 py-3 px-10 rounded-sm text-xs font-bold
                            hover:bg-green-600
                            transition duration-100">Konfiguruj PC</button>
                </div>
            </div>
        </div>
    );
}

export default PCConfiguration;