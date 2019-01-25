$(function () {

    // rendering the table
    const render = function (items) {
        $('#locked_users').empty();

        //appending each item to the locked-items #
        items.forEach(function (item) {
            $('#locked_users').append(renderItemRow(item));
        });
    }

    //api call and render
    const getItems = function () {
        $.get('/api/Black_Lists').then(render);
    }

    const renderItemRow = function (item) {
        const tr = $('<tr>');


        // unlock button
        const button = $('<button>')
            .addClass('btn btn-warning add-to-cart')
            .text('Unlock')
            .attr('data-id', item.id);

        //appending items to the div
        tr.append(
            $('<td>').text(item.time),
            $('<td>').text(`$${item.sso}`),
            $('<td>').text(item.action),
            $('<td>').text(item.device_ID),
            $('<td>').text(item.count),
            $('<td>').text(item.message),
            $('<td>').append(button)
        );
        return tr;
    }

    getItems();


    //code to update records
    
});