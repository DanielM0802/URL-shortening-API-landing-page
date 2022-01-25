const Link = ({objeto, links, setLinks}) => {

    const {short_link, original_link, isCopied} = objeto;

    const handleEstado = () => {
        const listaActualizada = links.map( o => {
            if(o.id === objeto.id || o.isCopied){  //Con el segundo condicional volvemos el estado anterior a isCopied = false
                const edit = {...o};
                edit.isCopied = !edit.isCopied;
                return edit;
            }
            return o;
        });

        setLinks(listaActualizada);
        copyLink();
    }

    const copyLink = () => {
        navigator.clipboard.writeText(short_link);
    }

    return (
        <div className="flex flex-col bg-white mb-6 rounded-md p-5 lg:flex-row lg:justify-between lg:items-center">
            <a className="mb-1 pb-2 border-b border-gray lg:mb-0 lg:border-0 lg:flex-grow" href={original_link} target={"_blank"}>{original_link}</a>
            <a className="text-cyan mb-3 lg:mb-0 lg:mr-5 " href={`http://${short_link}`} target={"_blank"} >{short_link}</a>
            
            { isCopied ? (
                <button className="btn-primary bg-darkViolet p-3 rounded-md lg:px-0 lg:w-28" onClick={copyLink}>Copied!</button>
            ): (
                <button className="btn-primary p-3 rounded-md lg:px-0 lg:w-28" onClick={handleEstado}>Copy!</button>
            )}
        </div>
    )
};

export default Link;
