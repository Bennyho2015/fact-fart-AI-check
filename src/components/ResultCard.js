  <details>
    <summary>為何？</summary>
    <ul>
      {result?.reasons?.length ? result.reasons.map((r, i) => (
        <li key={i}>{r.type}: {r.text} （信心 {Math.round((r.confidence||0)*100)}%）</li>
      )) : <li>無額外理由</li>}
    </ul>
  </details>
</div>
