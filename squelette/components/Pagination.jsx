export const Pagination = ({ handleClick, setPage, page, pageMax }) => {
  
  return (
    <div class="pagination">
      {(pageMax > 2 && page > 1) && <button onClick={() => setPage(1)}>Début</button>}
      {(pageMax == 2 || page <= 1) && <button onClick={() => setPage(1)} className="invisible">Début</button>}

      {(page > 1) && <button onClick={() => handleClick(-1)}>précédent</button>}
      {(page == 1) && <button onClick={() => handleClick(-1)} className="invisible">précédent</button>}

      <span>
        {page} / {pageMax}
      </span>

      {(page < pageMax) && <button onClick={() => handleClick(1)}>suivant</button>}
      {(page == pageMax) && <button onClick={() => handleClick(1)} className="invisible">suivant</button>}

      {(pageMax > 2 && page < pageMax) &&<button onClick={() => setPage(pageMax)}>Fin</button>}
      {(pageMax == 2 || page == pageMax) && <button onClick={() => handleClick(1)} className="invisible">Fin</button>}
    </div>
  );
}
