export default function BigButton({ children, onClick, disabled, loading, color = 'orange', icon = '→', type = 'button' }) {
  const bgClass = color === 'orange'
    ? 'bg-orange text-paper hover:bg-ink'
    : color === 'ink'
      ? 'bg-ink text-paper hover:bg-orange'
      : 'bg-lime text-ink hover:bg-ink hover:text-lime'
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn-primary w-full ${bgClass} px-6 py-4 rounded-2xl font-bold text-[15px] tracking-tight transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full spin"></span>
          <span>Locking you in...</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          <span>{icon}</span>
        </>
      )}
    </button>
  )
}
