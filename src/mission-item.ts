interface MissionItemElement extends HTMLElement {  }

( ( script, init ) =>
{
	if ( document.readyState !== 'loading' ) { return init( script ); }
	document.addEventListener( 'DOMContentLoaded', () => { init( script ); } );
} )( <HTMLScriptElement>document.currentScript, ( script: HTMLScriptElement ) =>
{
	( ( component, tagname = 'mission-item' ) =>
	{
		if ( customElements.get( tagname ) ) { return; }

		customElements.define( tagname, component );
	})( class extends HTMLElement implements FavoriteButtonElement
	{
		constructor()
		{
			super();

			const shadow = this.attachShadow( { mode: 'open' } );

			const style = document.createElement( 'style' );
			style.innerHTML =
			[
				':host { display: block; cursor: pointer; }',
			].join( '' );

			const contents = document.createElement( 'div' );

			shadow.appendChild( style );
			shadow.appendChild( contents );
		}
	}, script.dataset.tagname );
} );
