<script lang="ts">
	import type { User } from './+page.server.js';
	import { addThousandSeparator } from '../../utils/index.js';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { Popover } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';

	export let data;

	let rowData = data.data;
	let page = 1;
	let currentPageRows: User[] = [];
	let itemsPerPage = 10;
	let totalPages = rowData.length / itemsPerPage;
	$: beginPages =
		page < totalPages - 3
			? page - 1 > 1
				? ([page - 1, page, page + 1, page + 2] as number[])
				: [1, 2, 3, 4]
			: [page - 7, page - 6, page - 5, page - 4];
	$: lastPages = [totalPages - 1, totalPages];
	$: mergedPages = [totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2].concat(
		lastPages
	);

	const paginate = (rowData: User[]) => {
		const pages = Math.ceil(rowData.length / itemsPerPage);

		const paginatedItems = Array.from({ length: pages }, (_, index) => {
			const start = index * itemsPerPage;
			return rowData.slice(start, start + itemsPerPage);
		});

		currentPageRows = paginatedItems[page - 1];
	};

	const handleNextPage = () => {
		if (page < totalPages) {
			page += 1;
		}

		paginate(rowData);
	};

	const handlePreviousPage = () => {
		if (page > 0) {
			page -= 1;
		}

		paginate(rowData);
	};

	const handlePage = (currentPage: number) => {
		page = currentPage;
		paginate(rowData);
	};

	onMount(() => {
		paginate(rowData);
	});

	const allName: { id: string; name: string; checked: false }[] = [];

	let checkAll = false;

	const handleCheckAll = () => {
		checkAll = !checkAll;
		if (!checkAll) {
			currentPageRows = currentPageRows.map((item: User) => {
				return {
					...item,
					active: false
				};
			});
		} else {
			currentPageRows = currentPageRows.map((item: User) => {
				return {
					...item,
					active: true
				};
			});
		}
	};

	const handleCheck = (id: string) => {
		return rowData.map((item: User) => {
			if (item.id === id) {
				return {
					...item,
					active: !item.active
				};
			} else {
				return item;
			}
		});
	};

	const handleEdit = (id: string) => {};

	const handleDelete = (id: string) => {};
</script>

<svelte:head>
	<title>Incubeetor Assessment</title>
	<meta name="Incubeetor" content="Incubeetor Assessment" />
</svelte:head>

<div class="max-w-4xl m-auto8 p-2">
	<div class="flex mb-8">
		<h2 class="grow text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl text-center">
			Assesment Table
		</h2>
	</div>
	<table class="min-w-full divide-y divide-slate-200">
		<tr>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
				<input
					type="checkbox"
					id="allName"
					value={allName}
					on:click={handleCheckAll}
					checked={checkAll}
				/>
				<label for="allName">Name</label>
			</th>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Balance($)</th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Email</th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Registration</th
			>
			<th class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
				>Status</th
			>
			<th
				class="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider text-center"
				>Action</th
			>
		</tr>
		{#each currentPageRows as { id, name, balance, email, registerAt, active }}
			<tr>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
					<input type="checkbox" {id} on:click={handleCheck(id)} checked={active} />
					<label for={id}>{name}</label>
				</td>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					>${addThousandSeparator(balance)}</td
				>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					><a href="/#" class="cursor-pointer hover:text-sky-500 text-sky-700">
						{email}
					</a></td
				>
				<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900"
					><span class="cursor-pointer hover:text-sky-700" id="date"
						>{registerAt.toISOString().split('T')[0]}</span
					>
					<Popover
						class="w-auto p-2 text-slate-50 rounded text-sm font-light bg-sky-500"
						title="Detail Date"
						triggeredBy="#date"
						transition={fade}
					>
						{registerAt}
					</Popover></td
				>
				<td class="px-4 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
					<span
						class="border border-slate-500 rounded-full inline-block p-2 font-black text-slate-500 cursor-pointer hover:bg-sky-500 hover:text-slate-50"
						>Status</span
					></td
				>
				<td
					class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 flex justify-evenly"
					><Icon
						icon="uil:pen"
						on:click={handleEdit(id)}
						class="hover:text-sky-500 cursor-pointer"
					/>
					<Icon
						icon="iconoir:trash"
						on:click={handleDelete(id)}
						class="hover:text-sky-500 cursor-pointer"
					/>
				</td>
			</tr>
		{/each}
	</table>
	<div class="flex justify-between mx-5">
		<div class="font-black">
			{rowData.length} results
		</div>
		<nav class="pagination">
			<ul class="flex items-center">
				<li>
					<span
						aria-hidden="true"
						class="text-stone-500 cursor-pointer hover:text-sky-500"
						on:click={() => handlePreviousPage()}>«</span
					>
				</li>
				{#if page >= totalPages - 5}
					{#each mergedPages as currentPage}
						<li class={`mt-1 ${page === currentPage ? 'underline' : ''}`}>
							<span
								aria-hidden="true"
								class="text-stone-500 block mx-2 cursor-pointer hover:text-sky-500"
								on:click={() => handlePage(currentPage)}>{currentPage}</span
							>
						</li>
					{/each}
				{:else}
					{#each beginPages as currentPage}
						<li class={`mt-1 ${page === currentPage ? 'underline' : ''}`}>
							<span
								aria-hidden="true"
								class="text-stone-500 block mx-2 cursor-pointer hover:text-sky-500"
								on:click={() => handlePage(currentPage)}>{currentPage}</span
							>
						</li>
					{/each}
					<li>...</li>
					{#each lastPages as currentPage}
						<li class={`mt-1 ${page === currentPage ? 'underline' : ''}`}>
							<span
								aria-hidden="true"
								class="text-stone-500 block mx-2 cursor-pointer hover:text-sky-500"
								on:click={() => handlePage(currentPage)}>{currentPage}</span
							>
						</li>
					{/each}
				{/if}

				<li>
					<span
						aria-hidden="true"
						class="text-stone-500 cursor-pointer hover:text-sky-500"
						on:click={() => handleNextPage()}>»</span
					>
				</li>
			</ul>
		</nav>
	</div>
</div>

<style>
	td:empty:before {
		color: #94a3b8;
	}
</style>
